import React,{createContext,useState} from 'react';

const data = [
	{
		id:1,
		profile_image:"https://media-exp1.licdn.com/dms/image/C4E03AQHnPFgGMHqM9Q/profile-displayphoto-shrink_100_100/0/1593381865603?e=1625097600&v=beta&t=YP3qyf22bGQGYcTzwj1wAA-MVBEulCWdS770T6L99-8",
		name:"Jason Robinson",
		work:"Senior Software Engineer at Element",
		time:"5d",
		msg:"I've come to the conclusion that the voters don't know what the situation is. And the media + the main parties are screwing the voters over what they can, because for them business as usual is better. You're just going to be all right, and you're going to get hell.",
		type:"image",
		banner:"https://media-exp1.licdn.com/dms/image/C4E22AQEBRQdpj_bymg/feedshare-shrink_800/0/1619599130126?e=1622678400&v=beta&t=eV_IVX0gm8-PunaXMXJas-TYymZu4--jHASKnOBWVJU",
		comment:"",
		like:"",
		views:""
	},
	{
		id:2,
		profile_image:"https://media-exp1.licdn.com/dms/image/C5603AQE5LJKqBU1k-w/profile-displayphoto-shrink_100_100/0/1554993133638?e=1625097600&v=beta&t=8OdUlQZvtnnNxSApvKx-HYKRc8m-E8i1B0wwmGSHmJE",
		name:"Taiwo Judah-Ajayi",
		work:"Chief People Officer at Moove Africa",
		time:"4d",
		msg:"I can't keep calm coz Moove South Africa is ready to Launch! 💃🏽💃🏽💃🏽",
		type:'video',
		banner:"https://dms.licdn.com/playlist/C5605AQHNArSmfOG2-w/mp4-720p-30fp-crf28/0/1619267916968?e=1619708400&v=beta&t=1N0bagj297k4TAQKhiMgkWHrUBY-crLy_f9XPxqh_O8",
		comment:"15",
		like:"105",
		views:"2,562"
	},
	{
		id:3,
		profile_image:"https://media-exp1.licdn.com/dms/image/C4D0BAQG4n7fKL1UYGg/company-logo_100_100/0/1613527517276?e=1627516800&v=beta&t=3Dohf94bo16IvJF286tWasyRBFZwdOcjqtPfVaRBJoQ",
		name:"i2c Inc.",
		work:"Director, Data Analysis at Wpromote",
		time:"1d",
		msg:"Car IQ is writing a new chapter in payments history by enabling cars to pay and creating a new standard: Know Your Machine. We couldn’t be more proud to share this visionary partner’s story",
		type:'image',
		banner:"https://media-exp1.licdn.com/dms/image/C5622AQFhJ9ELfzojzQ/feedshare-shrink_2048_1536/0/1619580326985?e=1622678400&v=beta&t=qEJYdLs_FXbLCgRvbDL7kc_z5zVCcwJ_UanPlvChjGY",
		comment:"14",
		like:"206",
		views:""
	}	
]

export const Globals = createContext();
export const Wrapper = ({children}) => {
	let [post,setPost] = useState(data)
	let state = {
	  feed :[post,setPost]
	}
	return <Globals.Provider value={state}>
		{children}
	</Globals.Provider>
}