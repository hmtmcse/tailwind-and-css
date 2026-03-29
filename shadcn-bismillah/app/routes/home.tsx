import {AccordionDemo} from "~/example/accordion-demo";
import {CardDemo} from "~/example/card-demo";
import {InputDemo} from "~/example/input-demo";
import {InputGroupDemo} from "~/example/input-group-demo";
import {ItemDemo} from "~/example/item-demo";
import {PaginationDemo} from "~/example/pagination-demo";
import {SelectDemo} from "~/example/select-demo";
import {TableDemo} from "~/example/table-demo";
import {CarouselDemo} from "~/example/carousel-demo";
import {DialogDemo} from "~/example/dialog-demo";
import {TabsDemo} from "~/example/tabs-demo";
import {FieldDemo} from "~/example/field-demo";
import {AspectRatioDemo} from "~/example/aspect-ratio-demo";
import {CommandManyItems} from "~/example/command-many-items";
import {ContextMenuDemo} from "~/example/context-menu-demo";
import {DatePickerDemo} from "~/example/date-picker-demo";
import {MenubarDemo} from "~/example/menubar-demo";
import {NativeSelectDemo} from "~/example/native-select-demo";
import {ResizableDemo} from "~/example/resizable-demo";
import {ScrollAreaDemo} from "~/example/scroll-area-demo";
import {SeparatorDemo} from "~/example/separator-demo";
import {SheetDemo} from "~/example/sheet-demo";
import {SonnerDemo} from "~/example/sonner-demo";
import {SpinnerDemo} from "~/example/spinner-demo";
import {SwitchDemo} from "~/example/switch-demo";
import {ToggleGroupDemo} from "~/example/toggle-group-demo";
import {TooltipDemo} from "~/example/tooltip-demo";
import {SkeletonDemo} from "~/example/skeleton-demo";
import {AlertDialogDemo} from "~/example/alert-dialog-demo";
import {ButtonDemo} from "~/example/button-demo";
import {ButtonGroupDemo} from "~/example/button-group-demo";
import {CalendarDemo} from "~/example/calendar-demo";
import {CheckboxDemo} from "~/example/checkbox-demo";
import {ComboboxBasic} from "~/example/combobox-basic";
import {DrawerWithSides} from "~/example/drawer-with-sides";
import {DropdownMenuDemo} from "~/example/dropdown-menu-demo";

export default function Home() {
  return (
    <>
      <div className={"m-6"}>
          <DrawerWithSides/> <div className={"mt-12"}/>
          <CheckboxDemo/> <div className={"mt-12"}/>
          <CalendarDemo/> <div className={"mt-12"}/>
          <ButtonGroupDemo/> <div className={"mt-12"}/>
          <ButtonDemo/> <div className={"mt-12"}/>
          <AlertDialogDemo/> <div className={"mt-12"}/>
          <SkeletonDemo/> <div className={"mt-12"}/>
          {/*<TooltipDemo/> <div className={"mt-12"}/>*/}
          <ToggleGroupDemo/> <div className={"mt-12"}/>
          <SwitchDemo/> <div className={"mt-12"}/>
          <SpinnerDemo/> <div className={"mt-12"}/>
          <SonnerDemo/> <div className={"mt-12"}/>
          <SheetDemo/> <div className={"mt-12"}/>
          <SeparatorDemo/> <div className={"mt-12"}/>
          <ScrollAreaDemo/> <div className={"mt-12"}/>
          <ResizableDemo/> <div className={"mt-12"}/>
          <MenubarDemo/> <div className={"mt-12"}/>
          <DatePickerDemo/> <div className={"mt-12"}/>
          <ContextMenuDemo/> <div className={"mt-12"}/>
          <CommandManyItems/> <div className={"mt-12"}/>
          <AspectRatioDemo/> <div className={"mt-12"}/>
          <FieldDemo/> <div className={"mt-12"}/>
          <TabsDemo/> <div className={"mt-12"}/>
          <DialogDemo/> <div className={"mt-12"}/>
          <CarouselDemo/> <div className={"mt-12"}/>
          <TableDemo/> <div className={"mt-12"}/>

          <DropdownMenuDemo/> <div className={"mt-12"}/>
          <ComboboxBasic/> <div className={"mt-12"}/>
          <SelectDemo/> <div className={"mt-12"}/>
          <NativeSelectDemo/> <div className={"mt-12"}/>

          <PaginationDemo/> <div className={"mt-12"}/>
          <ItemDemo/> <div className={"mt-12"}/>
          <InputGroupDemo/> <div className={"mt-12"}/>
          <InputDemo/> <div className={"mt-12"}/>
          <CardDemo/> <div className={"mt-12"}/>
          <AccordionDemo/>
      </div>
    </>
  )
}
