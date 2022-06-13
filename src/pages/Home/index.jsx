import { useState } from "react"
import {
    Container, Content, CardFront,
    CardBack, DataForm, MasterLogRed,
    MasterLogYellow, MasterLogBg, ChipAndSignalBg,
    SymbolAndNameBg, PhrasesTop, LineCard,
    AnyQuestion, PlatinumAndIcon, OutsideBrazil,
    ContactUs, ContactUsWithIcon, AllContactsBackground,
    ContactsBackground, AnyQuestionWithIcon, CardNumber,
    CodesContainer, CodeTitles, CodeNumbers, CodesContent,
    AllNumbersBg, AllCirrusBg, CirrusLogDarkBlue,
    CirrusLogLightBlue, CirrusLogBg, PlatinumIcon,
    PlatinumRightBall, PlatinumLeftBall
} from "./styles"

import { FcSimCardChip } from 'react-icons/fc'
import { FaSignal } from 'react-icons/fa'
import { BsChatRightText, BsQuestionCircle } from 'react-icons/bs'
import NubankImg from '../../assets/nubankimg.png'

export function Home() {
    const [name, setName] = useState('')
    const [valid, setValid] = useState('')
    const [security, setSecurity] = useState('')

    const [fullname, setFullname] = useState('')
    const [cpf, setCpf] = useState('')
    const [contact, setContact] = useState('')

    const [sendBtn, setSendBtn] = useState(true)
    const [parsesentence, setParsesentence] = useState(false)


    function handleSend() {
        setSendBtn(false)
        setParsesentence(true)

        setName("")
        setValid("")
        setSecurity("")

        setFullname("")
        setCpf("")
        setContact("")

        setTimeout(() => {
            setSendBtn(true)
            setParsesentence(false)
        }, 5000)
    }


    return (
        <Container>
            <Content>

                <DataForm>
                    <div>
                        <h1>Simule seu cartão</h1>
                        <p>Insira os dados da forma que desejar</p>

                        <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Validade" value={valid} onChange={(e) => setValid(e.target.value)} />
                        <input type="text" placeholder="Código Segurança" value={security} onChange={(e) => setSecurity(e.target.value)} />
                    </div>

                    <div>
                        <h1>Informe seus dados</h1>
                        <p>Precisamos destes dados para análise e contato</p>
                        <input type="text" placeholder="Nome completo" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        <input type="text" placeholder="Contato" value={contact} onChange={(e) => setContact(e.target.value)} />
                        <div>
                            {sendBtn && (
                                <button type="button" onClick={handleSend}>Enviar</button>
                            )}
                        </div>

                        <div>
                            {parsesentence && (
                                <p>Cartão em análise. Logo entraremos em contato 😉</p>
                            )}
                        </div>
                    </div>
                </DataForm>



                <div>
                    <CardFront>
                        <MasterLogBg>
                            <MasterLogRed></MasterLogRed>
                            <MasterLogYellow></MasterLogYellow>
                        </MasterLogBg>

                        <ChipAndSignalBg>
                            <FcSimCardChip size={60} />
                            <FaSignal size={30} />
                        </ChipAndSignalBg>

                        <SymbolAndNameBg>
                            <img src={NubankImg} alt="Logo Empresa" width={90} />
                            <h2>{name}</h2>
                        </SymbolAndNameBg>
                    </CardFront>

                    <CardBack>
                        <PhrasesTop>
                            <span>Issued by Nubank under license by Mastercard International.</span>
                            <span>GEMALTO CWB U1149245D 0520ICA 16570</span>
                        </PhrasesTop>

                        <LineCard></LineCard>

                        <AllContactsBackground>
                            <PlatinumAndIcon>
                                <h4>platinum</h4>
                                <PlatinumIcon>
                                    <PlatinumRightBall>
                                    </PlatinumRightBall>
                                    <PlatinumLeftBall>
                                    </PlatinumLeftBall>
                                </PlatinumIcon>
                            </PlatinumAndIcon>

                            <ContactsBackground>
                                <AnyQuestionWithIcon>
                                    <div>
                                        <BsChatRightText size={28} />
                                    </div>
                                    <AnyQuestion>
                                        <span>Está com dúvida?</span>
                                        <span>Nosso App pode te ajudar.</span>
                                    </AnyQuestion>
                                </AnyQuestionWithIcon>

                                <ContactUsWithIcon>
                                    <div>
                                        <BsQuestionCircle size={28} />
                                    </div>
                                    <ContactUs>
                                        <span>Fale com a gente:</span>
                                        <span>0800 591 2117</span>
                                    </ContactUs>
                                </ContactUsWithIcon>
                            </ContactsBackground>

                            <OutsideBrazil>
                                <span>Outside Brazil</span>
                                <span>1 636 722 8881</span>
                            </OutsideBrazil>
                        </AllContactsBackground>

                        <AllNumbersBg>
                            <div>
                                <CardNumber>
                                    <span>4444 4444 4444 4444</span>
                                </CardNumber>

                                <CodesContainer>
                                    <CodesContent>
                                        <CodeTitles>
                                            <span>MEMBER</span>
                                            <span>SINCE</span>
                                        </CodeTitles>
                                        <CodeNumbers>
                                            <span>01/19</span>
                                        </CodeNumbers>
                                    </CodesContent>

                                    <CodesContent>
                                        <CodeTitles>
                                            <span>VALID</span>
                                            <span>THRU</span>
                                        </CodeTitles>
                                        <CodeNumbers>
                                            <span>{valid}</span>
                                        </CodeNumbers>
                                    </CodesContent>

                                    <CodesContent>
                                        <CodeTitles>
                                            <span>SECURITY</span>
                                            <span>CODE</span>
                                        </CodeTitles>
                                        <CodeNumbers>
                                            <span>{security}</span>
                                        </CodeNumbers>
                                    </CodesContent>
                                </CodesContainer>
                            </div>

                            <AllCirrusBg>
                                <CirrusLogBg>
                                    <CirrusLogDarkBlue></CirrusLogDarkBlue>
                                    <CirrusLogLightBlue></CirrusLogLightBlue>
                                </CirrusLogBg>
                                <div>
                                    <span>cirrus.</span>
                                </div>
                            </AllCirrusBg>
                        </AllNumbersBg>
                    </CardBack>
                </div>

            </Content >
        </Container >
    )
}