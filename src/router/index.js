import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Note from '../views/Note'
import Delete from '../views/Delete'
import Save from '../views/Save'
const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home,
    },
    {
        path : '/note',
        name : 'Note',
        component : Note,
    },
    {
        path : '/delete',
        name : 'Delete',
        component : Delete,
    },
    {
        path : '/save',
        name : 'Save',
        component : Save,
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router