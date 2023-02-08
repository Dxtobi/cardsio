




export default function Carousel(params: { profile: any; }) {

    const { profile } = params;
    const q = {
        id: profile.id,
        type:1000
  }
   

    return (
        
        <div id="default-carousel" className="relative" data-carousel="static">
       
        </div>
    )
  }