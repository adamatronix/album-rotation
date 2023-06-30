import { FloppyStage, FloppyAlbum } from "@manualengineering/floppy";
import lacyImage from './SteveGemini_1.jpeg'

export function setupFloppy(element: HTMLDivElement | null) {
  let floppy:any, stage:any;

  window.addEventListener('resize', () => {

    if(floppy && stage) {
      stage.destroy();
      stage = null;
      floppy = null;

      init();
    }
    
  })
  const init = () => {
    if(element) {
      floppy = new FloppyAlbum(lacyImage,1,3000,3000);
      stage = new FloppyStage(element, floppy,{
        requireCallback: true,
        ground: false,
        background: false,
        trailEffect: false,
        elastic: false,
        stats: false,
        animation: 'rotate',
        manual: true,
        autoRotate: 6
      });
      stage.startRender();
    }
  }

 init()
}
