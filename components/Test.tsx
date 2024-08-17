import { fetchNotes } from "@/supabase/data"

export default async function Test() {
    const data = await fetchNotes();
    console.log(data);

    return (
        <div>
            <h1>This is a test component</h1>
            {
                data?.map(({name, id, created_at}, index) => (
                    <div key={index}>
                        <h1>{name}</h1>
                        <p>{id}</p>
                        <span>{created_at}</span>
                    </div>
                ))
            }
        </div>
    )
}
