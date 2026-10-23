import DishArt from './DishArt.jsx'
import Photo from './Photo.jsx'

// Looks for /images/dishes/<kind>.jpg. If it is missing, shows the illustrated plate.
export default function DishCard({ kind, name, tag, price, desc }) {
  return (
    <article className="dish rv">
      <div className="dish-art">
        <Photo src={`/images/dishes/${kind}.jpg`} alt={name} fallback={<DishArt kind={kind} />} />
      </div>
      <div className="dish-body">
        <div className="dish-top"><h3>{name}</h3><b>{price}</b></div>
        <small>{tag}</small>
        <p>{desc}</p>
      </div>
    </article>
  )
}