import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {pickPokemon}  from '../actions';


export default function Bag(){
//const [color, setcolor] = useState(false)
//var colores=[];
const state = useSelector(store => store.scoreTable)
const dispatch = useDispatch()
function handleSelect(id){
    dispatch(pickPokemon(id))
    //setcolor(id);
    //var flag=true;
    if (state.bag.find(pokemon=>pokemon.is_default===false)){
        state.bag.map(pokemon=>pokemon.is_default=true);
    }
        state.bag.map((pokemon)=>{
            if (pokemon.id===id) {
            
                pokemon.is_default=!pokemon.is_default
                
            }

        })
}

    return(
        <div className="flex-cointainer__card">
            {state&&state.bag.map((pokemon,i)=>{
                //colores.push("flex-item__card");
                //console.log(colorcard[i])
                //handleColors("flex-item__card");
                return(
                <> 
                    <span onClick={()=>handleSelect(pokemon.id)} key={i} className={pokemon.is_default?"flex-item__card":"flex-item__card_selected"}>
                        <span>{pokemon.name[0].toUpperCase()}{pokemon.name.substring(1,pokemon.name.length)}
                        </span>
                        <div><img className="img_card" src={pokemon.sprites.front_default}/>
                        {i}
                        </div>
                        {pokemon.stats.map((stat)=>{
                            return(
                            <>
                                <div className="card_text">{stat.stat.name[0].toUpperCase()}{stat.stat.name.substring(1,stat.stat.name.length)}:{stat.base_stat}</div>
                            </>
                            )
                        })}
                        {/* <button key={i} onClick={()=>handleSelect(pokemon.id)}>Select to battle</button> */}
                    </span>
                </>
                )
                })
             }
        </div>
    )
}