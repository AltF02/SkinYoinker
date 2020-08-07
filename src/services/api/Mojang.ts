import axios, { AxiosResponse } from 'axios';

type getUser = {
    name: string,
    id: string
}

type userProfile = {
    id: string,
    name: string,
    properties: [{
        name: string,
        value: string
    }]
}

type userProperties = {
    timestamp : Number,
    profileId : string,
    profileName : string,
    textures : {
        SKIN : {
            url : string
        }
    }
}


async function getUserId(name: string): Promise<AxiosResponse<getUser>> {
    return await axios.get('https://api.mojang.com/users/profiles/minecraft/' + name)
}

async function getUserSkinUrl(name: string): Promise<string> {
    let user = await getUserId(name);
    let user_uid = user.data['id'];

    let user_profile: AxiosResponse<userProfile> = await axios.get('https://sessionserver.mojang.com/session/minecraft/profile/' + user_uid)
    console.log(user_profile)
    let properties: userProperties = JSON.parse(atob(user_profile.data['properties'][0]['value']))

    return properties['textures']['SKIN']['url']
}

export default getUserSkinUrl

