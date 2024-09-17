/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

const SkillCard = ({name,iconURL}) => {
    return ( 
        <div className="shadow-md shadow-[#46366963] aspect-card flex w-24 bg-indigo-700 rounded-lg">
            <div className="duration-200 flex-1 flex bg-indigo-500 rounded-lg translate-x-0 -translate-y-0 hover:translate-x-2 hover:-translate-y-2">
                    <div className="flex-1 flex p-4 flex-col items-center gap-4 duration-200 bg-slate-300 rounded-lg hover:translate-x-2 hover:-translate-y-2 translate-x-1 -translate-y-1">
                        <img src={iconURL} alt="cercle" />
                        <h3 className="font-sans text-xl font-semibold">{name}</h3>
                    </div>
            </div>
        </div>
     );
}
 
export default SkillCard;