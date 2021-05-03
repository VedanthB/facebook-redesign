import './Widgets.css'

function Widgets() {
    return (
        <div   >
            <iframe 
             className='widgets'
             src='https://www.linkedin.com/embed/feed/update/urn:li:share:6791127173022543872'
             width='340'
             height='800'
             style={{border: 'none', overflow: 'hidden',}}
             scrolling='yes'
             frameborder='0'
             title='linkedin'
             allowTransprancy='true'
             aloow='encrypted-media'
            ></iframe>
        </div>
    )
}

export default Widgets
