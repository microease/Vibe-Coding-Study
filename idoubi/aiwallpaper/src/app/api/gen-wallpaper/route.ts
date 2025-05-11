import {getOpenaiClient} from '../../../services/openai';

export async function POST(request: Request) {
    const {description} = await request.json();
    const client = getOpenaiClient();

    const result = await client.images.generate({
        prompt: "generate a wallpaper with the following description: " + description,
        model: "dall-e-3",
        n: 1,//生成数量
        quality: "hd",
        response_format: "url",
        size: "1920x1080",
        style: "natural",
        
    })
console.log("result",result);
    return Response.json({
        code: 200,
        message: "success",
        data: {
            img_desc: description,
            img_url: result.data[0].url
        }
    })
}

