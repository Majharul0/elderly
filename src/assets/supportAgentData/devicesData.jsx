import bosch from './devicesImages/bosch.svg'
import lock from '././devicesImages/lock.svg'
import watch from './devicesImages/watch1.png'
import alta from './devicesImages/alta.svg'
import camera from './devicesImages/camera.svg'
import plug from './devicesImages/plug.svg'
import radar from './devicesImages/radar.svg'
import speaker from './devicesImages/speaker.svg'

export const devicesData=[
    {
        id:1,
        title:"Sensor ",
        sensor:["Temperature: 72°F","Humidity: 55%","CO2 Level: 450 ppm","Noise Level: 35 dB"],
        name:"Bosch Smart Home Sm",
        stock:"in-stock",
        img:bosch
    },
    
    {
        id:2,
        title:"Lock",
        name:"SmartLife X1 Pro",
        stock:"out-stock",
        img:lock
    },
    {
        id:3,
        "title":"Sensor",
        sensor:["Temperature: 70°F","Humidity: 50%","CO2 Level: 455 ppm","Noise Level: 30 dB"],
        "name":"ALTA - Open/Closed Sensor",
        "stock":"in-stock",
        "img":alta
    },
    
    {
        id:4,
        title:"Camera",
        name:"Indoor Camera / CB71",
        stock:"out-stock",
        img:camera
    },
    {
        id:5,
        title:"Speaker",
        name:"Amazon Echo",
        stock:"out-stock",
        img:speaker
    },
    {
        id:6,
        title:"Watch",
        name:"Apple Watch Series 3",
        stock:"out-stock",
        img:watch
    },
    {
        id:7,
        title:"Sensor",
        sensor:["Temperature: 71°F","Humidity: 51%","CO2 Level: 451 ppm","Noise Level: 31 dB"],
        name:"RS-1843AOPC mmWave Radar",
        stock:"in-stock",
        img:radar
    },
    {
    id:8,
    title:"Plug",
    name:"MINI Wifi Plug",
    stock:"out-stock",
    img:plug
} 
    
]
