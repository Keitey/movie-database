import styled from "styled-components";

export const Container = styled.div`
    padding: 4rem 0;

    h1{
        margin: 3rem 0;
    }

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    img{
        width: 300px;
        border-radius: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;

        @media (max-width: 768px){
            width: 100%;
            max-width: 90%;
            padding-left: 2rem;
            margin: 0 auto;

        }
    }

    button{
        background: #6654da;
        border: none;
        color: #fff;
        cursor: pointer;
        padding: 0.8rem 2rem;
        border-radius: 1rem;
        margin-top: 1rem;
        font-size: 100%;
        transition:all .5s;
        font-weight: bold;
    }

    button:hover{
        background: #5848c2;
    }

    span{
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .release{
        opacity: 0.5;
    }
`;