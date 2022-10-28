import axios from "axios"

const baseURL = 'http://ec2-15-228-99-56.sa-east-1.compute.amazonaws.com:3333'

export const apiWorldCup = axios.create({ baseURL })