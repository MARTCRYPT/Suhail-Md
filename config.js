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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349047786519";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_44_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICA2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6aFYvL2dRNi83UXRtYW9jL0ZaTGk1UWRHZSt2UEdINnE3Rzk0cDJ6WnhVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuQW9NZl9uMlNUZUw2TFdSQ3cwV0V3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZlMDFlMTNjLWQ2YWUtNDVjYS1hNzY2LWY3OGY4ZjYzZDhiOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICA1NCxcbiAgICAgIDEwMixcbiAgICAgIDksXG4gICAgICAxMTcsXG4gICAgICAxMjYsXG4gICAgICAxNDIsXG4gICAgICAxNTIsXG4gICAgICAxOTcsXG4gICAgICAxMTksXG4gICAgICAxMTcsXG4gICAgICAxMTIsXG4gICAgICA5OCxcbiAgICAgIDE2NSxcbiAgICAgIDMyLFxuICAgICAgNixcbiAgICAgIDI5LFxuICAgICAgMzAsXG4gICAgICAyNDAsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICA2MSxcbiAgICAgIDEzOCxcbiAgICAgIDY0LFxuICAgICAgMTUsXG4gICAgICA1OSxcbiAgICAgIDI2LFxuICAgICAgMjQ5LFxuICAgICAgMjAsXG4gICAgICAxODksXG4gICAgICAyMDQsXG4gICAgICAxOTksXG4gICAgICAyMzYsXG4gICAgICAxODksXG4gICAgICAzOSxcbiAgICAgIDEzNSxcbiAgICAgIDE0OSxcbiAgICAgIDEzLFxuICAgICAgMTYyLFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWU5FQ0xWUlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDc3ODY1MTk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzg4MTY5NDQ4NTczMDU6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcTRxcm9ERUw3YzRMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkkxZHl4S21jL2xtTUROS0daQUZ2N09ZejhGa3pOR0pLcThhTWpUM2hoMWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUWZFV2xBU0RSL1NhUDdMaWYyTnNHb0NaMjdWQzlmeEJKRklneEo4WXdtZTNrQW96SnIwM093c0krZ1BGNWFnMndYVi9sQVdFN0M1cjByeGYwY1RlQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZlprMnh6TDdOWmwyNzdoaVF6SzZSS3dVZGdTV3JuMDhJRE45S3dNN3VIclNGcGpFMHJQTEJjbTFtWXd1Z3hhZndCTUZzWUJvVk8vUFNaUFZHS2MvRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0Nzc4NjUxOTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzA1NTA0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtvNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS281Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYVBLM1N5a3lBUXJFUWcxR2pZVzBIa2tjKzQ0d284OGZJTGVldHpuREgrVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5Mjc2MzY1MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
