import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "~/template/new-york-v4/ui/table";
import {ArrowDownAZ, ArrowDownUp, ArrowDownZA, ArrowUpAZ} from "lucide-react";
import {Field, FieldLabel} from "~/template/new-york-v4/ui/field";
import {
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Select
} from "~/template/new-york-v4/ui/select";
import {
    Pagination,
    PaginationContent,
    PaginationItem, PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "~/template/new-york-v4/ui/pagination";

export async function loader() {
    return {message: "Hello Task"}
}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]


interface TableColumnProps {
    headerName?: string
    fieldName?: string
    defaultValue?: any
    sortable?: boolean
    customize?: (row: any, data: any[], fieldName?: string, headerName?: string) => any
    thClassName?: string
    tdClassName?: string
}

interface TableProps {
    columns: TableColumnProps[]
    data: any[]
    onChangeItemPerPage?: (itemPerPage: number) => void
    onChangePagination?: (pageNumber:number, itemPerPage: number) => void
    itemPerPageOptions?: number[]
}


function PaginationIconsOnly() {
    return (
        <div className="flex items-center gap-2 float-end mt-3">
            <Field orientation="horizontal" className="w-fit">
                <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
                <Select defaultValue="25">
                    <SelectTrigger className="w-20" id="select-rows-per-page">
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent align="start">
                        <SelectGroup>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="25">25</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                            <SelectItem value="100">100</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Field>
            <Pagination className="mx-0 w-auto">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#"/>
                    </PaginationItem>
                     <PaginationItem>
                         <PaginationLink href="#">1</PaginationLink>
                     </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#"/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

function RawPagination2() {
    return (
        <nav className="flex items-center space-x-4">
            <ul className="flex -space-x-px text-sm">
                <li>
                    <a href="#"
                       className="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
                </li>
                <li>
                    <a href="#"
                       className="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">1</a>
                </li>
                <li>
                    <a href="#"
                       className="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page"
                       className="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
                </li>
                <li>
                    <a href="#"
                       className="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">4</a>
                </li>
                <li>
                    <a href="#"
                       className="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">5</a>
                </li>
                <li>
                    <a href="#"
                       className="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
                </li>
            </ul>
            <form className="w-32 mx-auto">
                <label htmlFor="countries" className="sr-only">Select an option</label>
                <select id="countries"
                        className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm leading-4 rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                    <option selected>10 per page</option>
                    <option value="25">25 per page</option>
                    <option value="50">50 per page</option>
                    <option value="100">100 per page</option>
                </select>
            </form>
        </nav>
    )
}

function RawPagination() {
    return (
        <>
            <nav>
                <ul className="flex -space-x-px text-sm">
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-9 h-9 focus:outline-none">
                            <span className="sr-only">Previous</span>
                            <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m15 19-7-7 7-7"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page"
                           className="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">4</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">5</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-9 h-9 focus:outline-none">
                            <span className="sr-only">Next</span>
                            <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m9 5 7 7-7 7"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>

            <nav>
                <ul className="flex -space-x-px text-sm">
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-10 h-10 focus:outline-none">
                            <span className="sr-only">Previous</span>
                            <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m15 19-7-7 7-7"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">1</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page"
                           className="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-10 h-10 focus:outline-none">3</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">4</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">5</a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-10 h-10 focus:outline-none">
                            <span className="sr-only">Next</span>
                            <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m9 5 7 7-7 7"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

function TableDemo() {
    return (
        <>
            <Table>
                <TableHeader className={"bg-muted"}>
                    <TableRow>
                        <TableHead className="w-[100px]">
                            <div className="flex items-center gap-1 cursor-pointer">
                                <a href="#"><ArrowDownUp size={14}/></a>
                                Invoice
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className="flex items-center gap-1 cursor-pointer">
                                <a href="#"><ArrowUpAZ size={14}/></a>
                                Status
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className="flex items-center gap-1 cursor-pointer">
                                <a href="#"><ArrowDownZA size={14}/></a>
                                Method
                            </div>
                        </TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3} className={"text-right"}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            <PaginationIconsOnly/>
        </>
    )
}


export default function TableTest() {
    return (
        <div className={"m-5"}>
            <TableDemo/>
            <RawPagination2/>
        </div>
    )
}