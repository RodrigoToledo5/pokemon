const inicialState={
    score:0,
    clickCounter:0,
    totalDamage:0,
    oponent:{},
    pick:{},
    bag:[],
    msj:"",
}

export default function scoreTable(state=inicialState,action){
    
    switch(action.type){
        case "LET_FIGTH":
             var msj=""
             
            if(state.oponent.stats){
                if(state.oponent.stats[5].base_stat<state.pick.stats[5].base_stat) msj="Soy mas rapido"
                else{ msj="El oponente es mas rapido"}

            }
            return{
                ...state,
                msj:msj
        };
        
        case "TAKE_POKEMON":
            //console.log(action.payload)
            if(state.bag.find(pokemon=>pokemon.id===action.payload.id)){
                
                return {...state}
            }
            else{
                return{
                    ...state,
                    bag:state.bag.concat(action.payload)
                };
            }
        case "PICK_POKEMON":
            if (state.bag.length>0){
                var selected=state.bag.filter((pokemon)=>{
                    if(pokemon.id===action.payload) return pokemon
                    return null
            })
            selected=selected[0];
            }

            return{
                ...state,
                pick:selected
            }
        case "RANDOM_ENEMY":


            action.payload.stats.map(stat=>{
                stat.base_stat=Math.trunc(stat.base_stat*Math.random()+1)
                return null
            })
            
            return{
                ...state,
            oponent:action.payload,
        };
        case "HIT":
             
            if(state.oponent.stats){
                if(!state.pick.stats){
                    return {
                        ...state,
                        msj:"Pickea un pokemon primero"
                    }
                }
                if(state.oponent.stats[5].base_stat<state.pick.stats[5].base_stat){
                    state.msj="Golpeaste primero";
                    state.oponent.stats[0].base_stat=state.oponent.stats[0].base_stat-state.pick.stats[1].base_stat;
    
                    if(state.oponent.stats[0].base_stat<=0){ 
                        
                        return {
                            ...state,
                            oponent:{},
                            score:state.score+15,
                            msj:"Golpeaste primero oponente derrotado"
                        }
                    }
                    state.pick.stats[0].base_stat=state.pick.stats[0].base_stat-state.oponent.stats[1].base_stat;
                    if(state.pick.stats[0].base_stat<=0){ 
                        
                        return {
                            ...state,
                            pick:{},
                            bag:state.bag.filter(pokemon=>pokemon.id!==state.pick.id),
                            score:state.score-10,
                            msj:"Golpeaste primero, tu oponente te ha derrotado y tu pokemon ha muerto los siento :("
                    
                        }
                    }
                }
                else{
                    state.msj="El oponente atacó primero";
                    state.pick.stats[0].base_stat=state.pick.stats[0].base_stat-state.oponent.stats[1].base_stat;
                    if(state.pick.stats[0].base_stat<=0){
                        
                        return {
                            ...state,
                            pick:{},
                            bag:state.bag.filter(pokemon=>pokemon.id!==state.pick.id),
                            score:state.score-10,
                            msj:"El oponente atacó primero, tu oponente te ha derrotado y tu pokemon ha muerto los siento :("
                        }
                    }
                    state.oponent.stats[0].base_stat=state.oponent.stats[0].base_stat-state.pick.stats[1].base_stat;
                    if(state.oponent.stats[0].base_stat<=0){ 
 
                        return {
                            ...state,
                            oponent:{},
                            score:state.score+15,
                            msj:"El oponente atacó primero, oponente derrotado"
                        }
                    }
                }


            }
            
            return{
                ...state,
            };
        
        default:
            return state;
    }
} 
