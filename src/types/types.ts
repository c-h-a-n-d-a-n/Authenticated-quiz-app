 export type data = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
 }

 export type quiz ={
     question:string 
     answer:string
     options:string[]
 }

 export type userdata={
    name: string
    storeData: string[]
 }

 export type questionProps = {
     question:string
     options:string[]
     handelSubmit:(e:React.FormEvent<EventTarget>, selectedAns:string)=>void
 }

 export type category ={
     id:number
     name:string
 }

 export type cate ={
    id:number
    name:string
}
 export type categoryAPI = {
    '' : []
 }

 export type welcomeProp ={
     setCategory:React.Dispatch<React.SetStateAction<number>>
     setTotalQuestions:React.Dispatch<React.SetStateAction<number>>
     setLevel:React.Dispatch<React.SetStateAction<string>>
     setStart:React.Dispatch<React.SetStateAction<boolean>>
 }

 
export type userE={
    name: string
}
export type userP={
    point: number
}
export type userC={
    category: string
}
export type userT={
    total: number
}
export type userL={
    level: string
}