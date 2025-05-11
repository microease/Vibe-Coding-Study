export async function GET(request: Request) {
    return Response.json({
        code: 200,
        message: "success",
        data: {
            img_url: "https://www.baidu.com"
        }
    })
}
