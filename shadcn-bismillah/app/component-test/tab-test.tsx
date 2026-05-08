import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/template/new-york-v4/ui/tabs";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/template/new-york-v4/ui/card";

export async function loader() {
    return {message: "Hello Task"}
}



interface TabItemProps {
    displayName: string
    tabName: string
    component: React.ReactNode
    hideMe?: boolean
    disabled?: boolean
}

type TabSelectIonType = "default" | "line"
type TabListOrientation = "horizontal" | "vertical"

interface TabProps {
    items: TabItemProps[]
    selectType?: TabSelectIonType
    orientation?: TabListOrientation
    selectedTab?: string
}

function Tab({items, selectedTab, selectType = "line", orientation = "horizontal"}: TabProps) {
    return (
        <Tabs defaultValue={selectedTab} orientation={orientation}>
            <TabsList variant={selectType}>
                {items.map((item: TabItemProps, index: number) => (
                    <TabsTrigger value={item.tabName} key={index}>{item.displayName}</TabsTrigger>
                ))}
            </TabsList>
            {items.map((item: TabItemProps, index: number) => (
                <TabsContent value={item.tabName} key={index}>{item.component}</TabsContent>
            ))}
        </Tabs>
    )
}


function Overview() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>
                    View your key metrics and recent project activity. Track progress
                    across all your active projects.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                You have 12 active projects and 3 pending tasks.
            </CardContent>
        </Card>
    )
}

function Analytics() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                    Track performance and user engagement metrics. Monitor trends and
                    identify growth opportunities.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                Page views are up 25% compared to last month.
            </CardContent>
        </Card>
    )
}

function Reports() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                    Generate and download your detailed reports. Export data in
                    multiple formats for analysis.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                You have 5 reports ready and available to export.
            </CardContent>
        </Card>
    )
}

export default function TabTest() {

    const tabData: TabProps = {
        items: [
            {displayName: "Overview", tabName: "overview", component: <Overview/>},
            {displayName: "Analytics", tabName: "analytics", component: <Analytics/>},
            {displayName: "Reports", tabName: "reports", component: <Reports/>},
        ]
    }


    return (
        <div className={"m-5"}>
            <Tab {...tabData} selectedTab={"overview"} orientation={"horizontal"} selectType={"line"}/>
        </div>
    )
}