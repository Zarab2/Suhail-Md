const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923177219279";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_44_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4LFxuICAgICAgICA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICA2MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICA4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDExNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImM1ZGlqaDd1R21yMVBTb0tXS0pCcEpmVzRRSkd1QUxTMW9RQkFEUlkyMG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNOeTFEZ2pIUVYtRnhhQllEZ1UzY2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmM3NDlmNWEtMDk5ZS00ZGI2LWFlZmUtMTNmNTQyNGFjNDA2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDIsXG4gICAgICAyMCxcbiAgICAgIDQ0LFxuICAgICAgNzAsXG4gICAgICA0OSxcbiAgICAgIDQ5LFxuICAgICAgMTU3LFxuICAgICAgMjIwLFxuICAgICAgMTE5LFxuICAgICAgOTgsXG4gICAgICA5NixcbiAgICAgIDIyNCxcbiAgICAgIDE4MCxcbiAgICAgIDcsXG4gICAgICAyMzcsXG4gICAgICAwLFxuICAgICAgMTQ3LFxuICAgICAgMTM4LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDE3OCxcbiAgICAgIDcxLFxuICAgICAgMjI0LFxuICAgICAgMzIsXG4gICAgICAxMDgsXG4gICAgICA0MixcbiAgICAgIDQ3LFxuICAgICAgMTAzLFxuICAgICAgMTg0LFxuICAgICAgOCxcbiAgICAgIDIzNSxcbiAgICAgIDIyOCxcbiAgICAgIDE4NyxcbiAgICAgIDE1LFxuICAgICAgMjAyLFxuICAgICAgMTU3LFxuICAgICAgNTksXG4gICAgICAyMDcsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVhOQUZQVlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE3NzIxOTI3OToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcyMjE2MjAxOTE0MzM6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzIxejg4Q0VNNjJ2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIweE1iNzhsaHRmVFdUSXhZeGpPNk1YeFNhK2owU3RhSkhKSmQ5R1FUdEFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImQxUHlDdkNyTU9LdHJTVm5tMXFBdW5sanZBL2xLVWVGOEl3Q2V5WFFUT2U5VUNWYXpxa2ZuOEhsZWxlTXVEWjJ1Ym5QcGMvU1BWVG53LzQ2RFQxREFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhaT3JpTXZiWDN2U3o2SUc3c2xUTnhBR3dKUytoWmtoNjUwNGNjdWgrRStmZzYyejVhT1VYMnFOZHR2SnFxR0FWV3dVdmR5ampmbEpmT2tzMHV4UWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE3NzIxOTI3OToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjg3NDQwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
