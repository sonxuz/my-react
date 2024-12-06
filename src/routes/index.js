
import { Component } from "react"
import Home from "../components/Home"
import Navbar from "../components/Navbar"

const publicRouter = [
    {
        path: "/", Component: Home

    },
    {
        path: "/navbar", Component: Navbar

    },

]
const privateRouter = [

]

export { publicRouter, privateRouter }