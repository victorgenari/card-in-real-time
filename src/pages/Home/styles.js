import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    place-content: center;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    padding: 1rem;
`

export const DataForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    width: 100%;
    max-width: 30rem;

    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid #6A5ACD;
 
    p {
        font-weight: 600;
        margin: 0 0 1rem 0;
    }

    input {
        width: 100%;
        font-size: 1.5rem;
        padding: 0.5rem;
        margin: 0 0 0.5rem 0;
        border-radius: 0.5rem;
        color: #FFFFFF;
        background: #695acdb4;

        ::placeholder {
            color: #FFFFFF;
            opacity: 0.4;
        }
    }

    div {
        div {
            display: flex;
            justify-content: center;

            button {
                font-size: 1.2rem;
                margin: 0.8rem 0 0 0;
                padding: 0.5rem 2rem;
                border-radius: 0.5rem;
                border: 2px solid transparent;
                color: #FFFFFF;
                background: #695acdb4;

                &:hover {
                    transition: .3s;
                    color: #000000;
                    border: 2px solid #6A5ACD;
                    background: transparent;
                }
            }

            p {
                font-weight: 600;
                margin: 1rem 0 0 0;
                padding: 0.5rem;
                border-radius: 0.5rem;
                border: 2px solid #6A5ACD;
            }
        }
    }
`



// Card Front
export const CardFront = styled.div`
    height: 18rem;

    margin: 0 0 2rem 0;
    padding: 1rem 1rem 2rem 3rem;

    border-radius: 0.5rem;
    color: #FFFFFF;
    background: #6A5ACD;
`

// MasterCard Log
export const MasterLogBg = styled.div`
    display: flex;
    justify-content: end;
`

export const MasterLogRed = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    background: #ff0000c9;
`

export const MasterLogYellow = styled.div`
    width: 4rem;
    height: 4rem;
    margin-left: -1.3rem;
    border-radius: 50%;

    background: #ffa600c2;
`

// Chip and Signal
export const ChipAndSignalBg = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0 0 2rem 0;
`

// Symbol and Name
export const SymbolAndNameBg = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`




// Card Back
export const CardBack = styled.div`
    border-radius: 0.5rem;
    color: #FFFFFF;
    background: #6A5ACD;
`

// Phrases Top
export const PhrasesTop = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0.5rem 1rem;
    font-size: 0.6rem;
`

// Code - Linecard
export const LineCard = styled.div`
    width: 100%;
    height: 4rem;

    background: #D1CECB;
`

export const AllContactsBackground = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 1rem 0 0 0;
`

export const ContactsBackground = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`

export const PlatinumAndIcon = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1.2rem;

    h4 {
        font-size: 1.2rem;
        letter-spacing: 1px;
        margin: 0 0 0.3rem 0;
    }
`






export const PlatinumIcon = styled.div`
    width: 5rem;
    height: 3rem;

    position: absolute;

    margin: 2rem 0 0 0;
    background: #C0C0C0;
    border-radius: 8rem 8rem 8rem 8rem;
`

export const PlatinumLeftBall = styled.div`
    width: 3rem;
    height: 3rem;

    position: absolute;

    background: #A9A9A9;
    border-radius: 8rem 6rem 6rem 8rem;
`

export const PlatinumRightBall = styled.div`
    width: 2rem;
    height: 2rem;

    position: absolute;

    margin: 0.5rem 0 0 2.4rem;
    background: #A9A9A9;
    border-radius: 50%;
`






export const AnyQuestion = styled.div`
    display: flex;
    flex-direction: column;
`

export const AnyQuestionWithIcon = styled.div`
    display: flex;
    gap: 0.3rem;
    font-size: 0.9rem;
`

export const ContactUs = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactUsWithIcon = styled.div`
    display: flex;
    gap: 0.3rem;
    font-size: 0.9rem;
`

export const OutsideBrazil = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    padding: 0 0 0 2rem;
`





export const AllNumbersBg = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem 1.2rem 1.2rem;
    margin: 1.5rem 0 0 0;
`

export const CardNumber = styled.div`
    font-size: 2.2rem;
    margin: 0 0 0.5rem 0;
`

export const CodesContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const CodesContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
`

export const CodeTitles = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
`

export const CodeNumbers = styled.div`
    font-size: 2rem;
`

export const AllCirrusBg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CirrusLogBg = styled.div`
    display: flex;
`

export const CirrusLogDarkBlue = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;

    background: #00024edc;
`

export const CirrusLogLightBlue = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    margin-left: -1.3rem;
    border-radius: 50%;

    background: #00a2ffaf;
`