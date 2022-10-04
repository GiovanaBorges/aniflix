interface Props{
    text:string,
    type:string
}

export function ButtonGoogle(props:Props){
    return (
        <>
             <button  id="first_name" 
             className="flex justify-center bg-zinc-500 mt-5
              text-gray-900 text-lg rounded-lg  font-medium
             focus:ring-blue-500 focus:border-blue-500 block w-3/6 mx-auto
             p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <img src="https://img.icons8.com/color/25/000000/google-logo.png" className="mx-3"/>{props.text}
             </button>
        </>
    )
}