import Email from '../../Components/email/Email'
import Featured from '../../Components/featured/Featured'
import FeaturedProperties from '../../Components/featuredproperties/FeaturedProperties'
import Footer from '../../Components/footer/Footer'
import Header from '../../Components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import PropertyList from '../../Components/propertylist/PropertyList'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <h1 className="homeTitle"> Browse by property type</h1>
        <PropertyList/>
          <Featured/>   
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties/>   
          <Email/>
          <Footer/>
        </div>
       
    </div>
  )
}

export default Home
