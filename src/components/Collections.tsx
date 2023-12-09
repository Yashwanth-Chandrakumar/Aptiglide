import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Collections(){
    return(<div className='coll'>
            <h2 className="carousel-text">Collections<button className='grid-sub'><span> View all </span><ArrowForwardIcon color="primary" className='arrow' /></button></h2>
            <p className='grid-content'>Test your IQ with our Aptitude tests and problem solving skills with out logic tests.</p>

        <div className="conteudo coll"> <div className="carrousel1">

<article className="card">
<span className='car-img'><img loading='lazy' src='images\20943758.jpg' width="100%" height="100%" /></span>
<h4>Science</h4>

</article>

<article className="card"><span className='car-img'><img loading='lazy' src='images\4401280.jpg' width="100%" height="100%" /></span> <h4>Mathematics</h4>

</article>

<article className="card"><span className='car-img'><img loading='lazy' src='images\4412009.jpg' width="100%" height="100%" /></span> <h4>Problem - Solving skills</h4>

</article> 
<article className="card">
<span className='car-img'><img loading='lazy' src='images\6203326.jpg' width="100%" height="100%" /></span>
<h4>Aptitude</h4> </article>

<article className="card">
<span className='car-img'><img loading='lazy' src='images\8084.jpg' width="100%" height="100%" /></span>
<h4>Logical Thinking</h4>

</article>

<article className="card">
<span className='car-img'><img loading='lazy' src='images\4412009.jpg' width="100%" height="100%" /></span>
<h4>Coding Related Qns</h4>

</article>

</div>
</div>
    </div>);
}