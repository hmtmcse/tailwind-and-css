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

function TableDemo() {
    return (
        <>
            <Table>
                <TableHeader className={"bg-muted"}>
                    <TableRow>
                        <TableHead className="w-[100px]">
                            <div className="flex items-center gap-1 cursor-pointer">
                                Invoice
                                <a href="#"><ArrowDownUp size={12}/></a>
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className="flex items-center gap-1 cursor-pointer">
                                Status
                                <a href="#"><ArrowUpAZ size={12}/></a>
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className="flex items-center gap-1 cursor-pointer">
                                Method
                                <a href="#"><ArrowDownZA size={12}/></a>
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
        </div>
    )
}