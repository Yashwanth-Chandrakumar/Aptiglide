import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function IntroGrid(){
    const arrowStyle = {
        fontSize: '200%', 
      };
    return(
        <div className="grid">
            <h2 className="carousel-text">Quizzes<button className='grid-sub'><span> View all </span><ArrowForwardIcon color="primary" className='arrow' style={arrowStyle} /></button></h2>
            <p className='grid-content'>Test your IQ with our Aptitude tests and problem solving skills with out logic tests.</p>
<div className="conteudo"> <div className="carrousel">

<article className="card">
<span className='car-img'><img src='images\4401280.jpg' width="100%" height="100%" /></span>
<h4>HTML</h4>

</article>

<article className="card"><span className='car-img'><img src='images\8084.jpg' width="100%" height="100%" /></span> <h4>C++</h4>

</article>

<article className="card"><span className='car-img'><img src='images\4412009.jpg' width="100%" height="100%" /></span> <h4>JS</h4>

</article> 
<article className="card">
<span className='car-img'><img src='images\6203326.jpg' width="100%" height="100%" /></span>
<h4>Aptitude - I</h4> </article>

<article className="card">
<span className='car-img'><img src='images\4412009.jpg' width="100%" height="100%" /></span>
<h4>Aptitude - II </h4>

</article>

<article className="card">
<span className='car-img'><img src='images\8084.jpg' width="100%" height="100%" /></span>
<h4>Aptitude - III</h4>

</article>
</div>
</div>
</div>
    );
}