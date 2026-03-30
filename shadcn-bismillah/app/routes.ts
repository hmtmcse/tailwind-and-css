import {type RouteConfig, index, route} from "@react-router/dev/routes"

export default [
    index("routes/home.tsx"),
    route("/dashboard", "dashboard/dashboard-home.tsx"),
    route("/task", "task/task-home.tsx"),
] satisfies RouteConfig
