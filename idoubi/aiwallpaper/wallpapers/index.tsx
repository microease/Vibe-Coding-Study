async function getWallpaper() {
  const res = await fetch("http://127.0.0.1:3000/api/get-wallpaper");
  const data = await res.json();
  return data;
}

export default async function Wallpaper() {
  const wallpaper = await getWallpaper();
  console.log(wallpaper);

  return (
    <section>
      <div>
        {data.map((v: any, idx: number) => {
          return (
            <div>
              <h2>wallpaper list</h2>
            </div>
          );
        })}
        {wallpaper.data.img_url}
      </div>
    </section>
  );
}
