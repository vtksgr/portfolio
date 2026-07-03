import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/axios";
import LogoutButton from "../../../components/admin/LogoutButton";

function toInputDate(value) {
	if (!value) return "";

	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "";

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return year + "-" + month + "-" + day;
}

function formatDate(value) {
	if (!value) return "-";

	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "-";

	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(date);
}

function formatInquiryType(value) {
	if (!value) return "-";

	return String(value)
		.toLowerCase()
		.split("_")
		.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
		.join(" ");
}

export default function CandidateContactList() {
	const [contacts, setContacts] = useState([]);
	const [searchFilter, setSearchFilter] = useState("");
	const [dateFilter, setDateFilter] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		let mounted = true;

		async function loadContacts() {
			try {
				setLoading(true);
				setError("");

				const res = await api.get("/api/admin/contacts", {
					params: {
						type: "candidate",
						page: 1,
						limit: 100,
						sort: "newest",
					},
				});

				const rows = Array.isArray(res.data?.data) ? res.data.data : [];

				if (mounted) {
					setContacts(rows);
				}
			} catch (err) {
				if (mounted) {
					setError(err.message || "Failed to load candidate contacts.");
				}
			} finally {
				if (mounted) {
					setLoading(false);
				}
			}
		}

		loadContacts();

		return function cleanup() {
			mounted = false;
		};
	}, []);

	const filteredContacts = useMemo(() => {
		const needle = searchFilter.trim().toLowerCase();

		return contacts
			.filter((contact) => {
				const fullName = [contact.firstName, contact.lastName]
					.filter(Boolean)
					.join(" ")
					.toLowerCase();
				const email = String(contact.email || "").toLowerCase();
				const phoneNumber = String(contact.phoneNumber || "").toLowerCase();

				const matchesSearch =
					!needle ||
					fullName.includes(needle) ||
					email.includes(needle) ||
					phoneNumber.includes(needle);

				const createdDate = toInputDate(contact.createdAt);
				const matchesDate = !dateFilter || createdDate === dateFilter;

				return matchesSearch && matchesDate;
			})
			.sort((left, right) => {
				const leftTime = new Date(left.createdAt || 0).getTime();
				const rightTime = new Date(right.createdAt || 0).getTime();

				return rightTime - leftTime;
			});
	}, [contacts, dateFilter, searchFilter]);

	return (
		<div className="min-h-[calc(100vh-3rem)] rounded-2xl bg-slate-100 shadow-sm">
			<div className="flex items-center justify-between rounded-t-2xl bg-slate-900 px-6 py-4">
				<h1 className="text-lg font-semibold text-white">Candidate Contacts</h1>
				<LogoutButton />
			</div>

			<div className="px-6 py-6">
				<div className="mb-4 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-end">
					<div className="w-full md:max-w-sm">
						<label className="mb-1 block text-sm font-medium text-slate-700">
							Search Candidate
						</label>
						<input
							type="text"
							value={searchFilter}
							onChange={(event) => setSearchFilter(event.target.value)}
							placeholder="Search name, email, phone..."
							className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
						/>
					</div>

					<div className="w-full md:max-w-xs">
						<label className="mb-1 block text-sm font-medium text-slate-700">
							Filter by Date
						</label>
						<input
							type="date"
							value={dateFilter}
							onChange={(event) => setDateFilter(event.target.value)}
							className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
						/>
					</div>

					<button
						type="button"
						onClick={() => {
							setSearchFilter("");
							setDateFilter("");
						}}
						className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-300"
					>
						Reset
					</button>

					<div className="md:ml-auto">
						<Link
							to="/admin/dashboard"
							className="inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
						>
							Back to Dashboard
						</Link>
					</div>
				</div>

				<div className="overflow-hidden rounded-xl bg-white shadow-sm">
					{loading ? (
						<div className="p-6 text-sm text-slate-600">Loading candidate contacts...</div>
					) : error ? (
						<div className="p-6 text-sm text-red-600">{error}</div>
					) : filteredContacts.length === 0 ? (
						<div className="p-6 text-sm text-slate-600">No candidate contacts found.</div>
					) : (
						<div className="overflow-x-auto">
							<table className="min-w-full border-collapse">
								<thead className="bg-slate-50">
									<tr>
										<th className="border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
											No.
										</th>
										<th className="border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
											Candidate
										</th>
										<th className="border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
											Contact
										</th>
										<th className="border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
											Inquiry Type
										</th>
										<th className="border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
											Resume
										</th>
										<th className="border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
											Created Date
										</th>
									</tr>
								</thead>

								<tbody>
									{filteredContacts.map((contact, index) => (
										<tr key={contact.id} className="hover:bg-slate-50">
											<td className="border-b border-slate-100 px-4 py-3 text-sm text-slate-700">
												{index + 1}
											</td>
											<td className="border-b border-slate-100 px-4 py-3 text-sm text-slate-900">
												<p className="font-medium">
													{[contact.firstName, contact.lastName].filter(Boolean).join(" ") || "-"}
												</p>
												<p className="mt-1 text-xs text-slate-500">
													ID #{contact.id}
												</p>
											</td>
											<td className="border-b border-slate-100 px-4 py-3 text-sm text-slate-700">
												<p>{contact.email || "-"}</p>
												<p className="mt-1 text-xs text-slate-500">
													{contact.phoneNumber || "-"}
												</p>
											</td>
											<td className="border-b border-slate-100 px-4 py-3 text-sm text-slate-700">
												{formatInquiryType(contact.candidate?.inquiryType)}
											</td>
											<td className="border-b border-slate-100 px-4 py-3 text-sm text-slate-700">
												{contact.candidate?.resumeUrl ? (
													<a
														href={contact.candidate.resumeUrl}
														target="_blank"
														rel="noreferrer"
														className="font-medium text-cyan-700 hover:text-cyan-800"
													>
														Open Resume
													</a>
												) : (
													"-"
												)}
											</td>
											<td className="border-b border-slate-100 px-4 py-3 text-sm text-slate-700">
												{formatDate(contact.createdAt)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
