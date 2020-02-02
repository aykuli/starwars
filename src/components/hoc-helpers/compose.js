const compose = (...func) => (comp) => func.reduceRight((prevRes, f) => f(prevRes), comp); 
export default compose;