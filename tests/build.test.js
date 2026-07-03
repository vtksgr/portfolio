import assert from 'node:assert/strict'
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const distDirectory = path.resolve('dist')

test('production HTML contains portfolio metadata and base-prefixed assets', async () => {
  const html = await readFile(path.join(distDirectory, 'index.html'), 'utf8')

  assert.match(html, /<title>Sagar Pariyar \| Web Developer &amp; UI Designer<\/title>/)
  assert.match(html, /name="description"/)
  assert.match(html, /(?:src|href)="\/portfolio\//)
})

test('production assets stay within the 2 MB performance budget', async () => {
  const assetsDirectory = path.join(distDirectory, 'assets')
  const assetNames = await readdir(assetsDirectory)
  const assetSizes = await Promise.all(
    assetNames.map(async (assetName) => ({
      assetName,
      size: (await stat(path.join(assetsDirectory, assetName))).size,
    }))
  )
  const largestAsset = assetSizes.sort((left, right) => right.size - left.size)[0]

  assert.ok(
    largestAsset.size <= 2_000_000,
    `${largestAsset.assetName} is ${largestAsset.size} bytes`
  )
})
