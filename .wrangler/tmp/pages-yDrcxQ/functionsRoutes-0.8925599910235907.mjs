import { onRequestPatch as __api_admin_bookings__id__js_onRequestPatch } from "E:\\MonarchScalingAgencyGIT\\Github\\beatrice-apartment\\functions\\api\\admin\\bookings\\[id].js"
import { onRequestGet as __api_admin_bookings_js_onRequestGet } from "E:\\MonarchScalingAgencyGIT\\Github\\beatrice-apartment\\functions\\api\\admin\\bookings.js"
import { onRequestPost as __api_bookings_js_onRequestPost } from "E:\\MonarchScalingAgencyGIT\\Github\\beatrice-apartment\\functions\\api\\bookings.js"
import { onRequestGet as __api_rooms_js_onRequestGet } from "E:\\MonarchScalingAgencyGIT\\Github\\beatrice-apartment\\functions\\api\\rooms.js"

export const routes = [
    {
      routePath: "/api/admin/bookings/:id",
      mountPath: "/api/admin/bookings",
      method: "PATCH",
      middlewares: [],
      modules: [__api_admin_bookings__id__js_onRequestPatch],
    },
  {
      routePath: "/api/admin/bookings",
      mountPath: "/api/admin",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_bookings_js_onRequestGet],
    },
  {
      routePath: "/api/bookings",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_bookings_js_onRequestPost],
    },
  {
      routePath: "/api/rooms",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_rooms_js_onRequestGet],
    },
  ]