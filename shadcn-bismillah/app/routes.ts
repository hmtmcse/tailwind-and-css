import {type RouteConfig, index, route} from "@react-router/dev/routes"

export default [
    index("routes/home.tsx"),
    route("/dashboard", "dashboard/dashboard-home.tsx"),
    route("/task", "task/task-home.tsx"),
    route("/testing/common", "component-test/common-test.tsx"),
    route("/testing/input", "component-test/input-field.tsx"),
    route("/testing/select", "component-test/select-exp.tsx"),
    route("/testing/image", "component-test/image-testing.tsx"),
    route("/testing/dialog", "component-test/dialog-test.tsx"),
    route("/testing/dropdown", "component-test/dropdown-test.tsx"),
    route("/testing/table", "component-test/table-test.tsx"),
    route("/testing/tab", "component-test/tab-test.tsx"),
    route("/panel/sidebar-07", "app-frame/sidebar-07/page.tsx"),
    route("/panel/dashboard-01", "app-frame/dashboard-01/page.tsx"),
] satisfies RouteConfig
