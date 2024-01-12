import Container from "@/app/components/Container";

export default function page() {
    return (
       <Container>
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.736413142408!2d126.89906837732686!3d37.443331172070806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b61af6c8b3039%3A0x7f081b0d6f587b11!2z7ISc7Jq47Yq567OE7IucIOq4iOyynOq1rCDsi5ztnaXrjIDroZwgOTc!5e0!3m2!1sko!2skr!4v1705045975623!5m2!1sko!2skr"  height="450" stylesheet="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p className="my-5 font-semibold">서울 금천구 시흥대로 97, 25-324</p>
       </Container>
    );
}


