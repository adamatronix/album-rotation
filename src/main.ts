import './style.css'
import lacyVideo from './SteveLacy_ADAM.mp4'
import { setupFloppy } from './floppy'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-wrapper">
    <div class="stage"></div>
    <video class="full-video" controlsList="nodownload noplaybackrate" autoplay playsInline muted loop>
      <source src="${lacyVideo}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
`
setupFloppy(document.querySelector<HTMLDivElement>(".stage"));

