import BasePage from "../base-page";

export default function DiveSchoolPage() {
    return (
        <>
            <BasePage
                children={
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold text-accent">Dive School</h1>
                        <p className="text-lg text-primaryDark">Learn to dive with us!</p>
                    </div>
                } />
        </>
    );
}