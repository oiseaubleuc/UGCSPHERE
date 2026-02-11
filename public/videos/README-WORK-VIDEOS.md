# Work-sectie video's (MP4)

De sectie "Our Work" gebruikt **lokale MP4-bestanden**. Zet deze 3 bestanden in deze map:

| Bestand      | YouTube-URL |
|-------------|-------------|
| `work-1.mp4` | https://www.youtube.com/watch?v=NLeTEjx3njg |
| `work-2.mp4` | https://www.youtube.com/watch?v=ryiR20myQ7M |
| `work-3.mp4` | https://www.youtube.com/watch?v=H6XZvE-diE4 |

## Downloaden (alleen als je het recht hebt op deze video's)

Op Mac met **yt-dlp** (beste kwaliteit, o.a. 1080p):

```bash
brew install yt-dlp
cd "SPHEREUGC V2/public/videos"

yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" -o "work-1.mp4" "https://www.youtube.com/watch?v=NLeTEjx3njg"
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" -o "work-2.mp4" "https://www.youtube.com/watch?v=ryiR20myQ7M"
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" -o "work-3.mp4" "https://www.youtube.com/watch?v=H6XZvE-diE4"
```

Zodra `work-1.mp4`, `work-2.mp4` en `work-3.mp4` in deze map staan, worden ze automatisch in de Work-sectie getoond.
