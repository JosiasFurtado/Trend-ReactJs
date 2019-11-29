import React from 'react';
import { IoMdHeart, IoMdTrendingUp, IoMdText } from 'react-icons/io';
import Header from '../../components/Header';
import {
    Container,
    User,
    LeftColOptions,
    Post,
    PostHeader,
    PostFooter,
    Trends,
    Today,
} from './styles';

import imgteste from '../../assets/imgteste.jpg';

export default function Feed() {
    return (
        <>
            <Header />
            <Container>
                <div id="leftCol">
                    <User>
                        <img src={imgteste} alt="User Name" />
                        <div>
                            <h2>Josias Furtado</h2>
                            <p>Dev Javascipt</p>
                        </div>
                    </User>
                    <LeftColOptions>
                        <p>Opção 1</p>
                        <p>Opção 2</p>
                        <p>Opção 3</p>
                        <p>Opção 4</p>
                        <div>
                            <h1>Trends</h1>
                            <IoMdTrendingUp size={25} color="#fff" />
                        </div>
                    </LeftColOptions>
                </div>
                <div id="feed">
                    <Post>
                        <PostHeader>
                            <img src={imgteste} alt="avatar" />
                            <div>
                                <p>Josias Furtado</p>
                                <h5>Rio de Janeiro - 28/11/19</h5>
                            </div>
                        </PostHeader>
                        <img src={imgteste} alt="Post" />
                        <PostFooter>
                            <div>
                                <IoMdTrendingUp size={25} />
                                <IoMdHeart size={25} />
                                <IoMdText size={25} />
                            </div>
                            <p>
                                Neque porro quisquam est qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit...
                            </p>
                        </PostFooter>
                    </Post>
                </div>
                <Trends>
                    <h1>Trends&nbsp;&bull; Today</h1>
                    <Today>
                        <img src={imgteste} alt="trends" />
                        <img src={imgteste} alt="trends" />
                        <img src={imgteste} alt="trends" />
                        <img src={imgteste} alt="trends" />
                        <img src={imgteste} alt="trends" />
                        <img src={imgteste} alt="trends" />
                    </Today>
                </Trends>
            </Container>
        </>
    );
}
