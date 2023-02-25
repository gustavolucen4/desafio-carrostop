import CatalogCard from '../../components/CatalogCard';
import CommentsCard from '../../components/CommetsCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

export default function MainPage() {
    
    return(
        <>  
            <Header/>
            <main>
                <section id='ds-main-section'>
                    <div className='ds-catalog-main-page'>
                        <h2>Venha nos visitar</h2>

                        <div className='ds-catalog-card-container'>
                            <CatalogCard/>
                            <CatalogCard/>
                        </div>
                    </div>

                    <div className='ds-comments-main-page'>
                        <h2>O que estão dizendo</h2>

                        <div className='ds-comments-card-container'>
                            <CommentsCard/>
                            <CommentsCard/>
                            <CommentsCard/>
                            <CommentsCard/>
                            <CommentsCard/>
                        </div>
                    </div>

                </section>
            </main>
            <Footer/>
        </>
    );
}