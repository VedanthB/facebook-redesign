import './Reels.css'
import Story from './Story'


function Reels() {
    return (
        <div className="reels">
            {/* Story */}

            <Story 
            image='https://media.tenor.com/images/60d7e83076e9e58d0691b25b01d1556e/tenor.gif'
            profileSrc='https://pbs.twimg.com/profile_images/1383184766959120385/MM9DHPWC_400x400.jpg'
            title='Elon Musk'
            />
            <Story 
            image='https://media.tenor.com/images/0a802a86fea0b9d02b6be9c8f160dd72/tenor.gif'
            profileSrc='https://static.hollywoodreporter.com/sites/default/files/2012/10/snoop_dogg_tiff.jpg'
            title='Snoop Dogg'
            />
            <Story 
            image='https://media.tenor.com/images/161041b2368d58e74be304435d30d135/tenor.gif'
            profileSrc='https://variety.com/wp-content/uploads/2016/02/the-batman.jpg'
            title='Batman'
            />
            <Story 
            image='https://media.tenor.com/images/308ed51b418396589d63c3938f00acb8/tenor.gif'
            profileSrc='https://images.indianexpress.com/2021/01/ww84-hbo-1200by667.jpg'
            title='Wonder Woman'
            />
        </div>
    )
}

export default Reels
