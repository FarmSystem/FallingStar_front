import React, { Component } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import record from "../abis/record.json";
import {
MDBCard,
MDBCardBody,
MDBCardTitle,
MDBCardText,
MDBCardImage,
MDBBtn,
} from "mdb-react-ui-kit";

//리덕스
import {useSelector, useDispatch} from "react-redux"
import { addRecord } from '../../redux/store';

// MetaMask 주소에서 ETH 계정으로 접속하면
// Ganache로부터 MetaMask가 프론트엔드 상에 연결됨 (Connected로 연결됨 표시)
// 사용자 계정 == 디스플에이된 주소의 계정
// MINT 버튼으로 이미지를 NFT로 민팅(Minting으로 해당 이미지를 nft로 설정하는 것!)


function Blockchain() {
    //리덕스
    let a = useSelector((state) => { return state } )

    async function componentDidMount() {
        // componentDidMount() -> 생명주기 함수 사용 (mount완료후 실행된다는 뜻)
        await this.loadWeb3();
        // 비동기 방식으로 lodaWeb3 기져오기
        await this.loadBlockchainData();
        // 블록체인 데이터를 즉각적으로 호출
    }
    
    // first up is to detect ethereum provider
    // -> 아래 함수를 통해 페이지를 처음 렌더링할때 먼저
    // 이더리움 제공자인지부터 확인함
    async function loadWeb3() {
        const provider = await detectEthereumProvider();
    
        // 조건식을 통해 이더리움을 최신브라우저로 확인
        if (provider) {
        // provider == web3 제공자
        console.log("ethereum wallet is connected");
        window.web3 = new Web3(provider);
        // 이더리움이 제공되었다면 되었다는 메시지를 콘솔에 출력
        } else {
        // no ethereum provider
        console.log("no ethereum wallet detected");
        // 이더리움이 제공되지 않는 경우 메시지 콘솔에 출력
        }
    }
    
    // 계정 정보를 불러오거나 가져오기
    async function loadBlockchainData() {
        const web3 = window.web3;
        let accounts = await web3.eth.getAccounts();
        console.log('과연',accounts);
        // Ganache에서 계정 불러오기 (Ganache계정은 블록체인으로 존재)
        this.setState({ account: accounts[0] });
    
        // state에 계정(블록체인) 을 동적으로 추가
        // -> 호출자에 따라서 사용자 계정이 변하므로 state에
        // 계정 정보를 저장하고 state에 따라 재호출하는 방식
        // 이는 아래 코드에서 constructor() 함수를 통해 구현됨
    
        const networkId = await web3.eth.net.getId();
        const networkData = record.networks[networkId];
        // 계약 데이터를 불러올때 사용할 네트워크 ID 생성
        // (== Ganache 네트워크 id에 설정될 network id임)
    
        if (networkData) {
        const abi = record.abi;
        // 1. 가변 API를 생성해서 record ABI에 설정
        const address = networkData.address;
        // 2. 가변 주소 생성 후 networkData 주소로 설정
        const contract = new web3.eth.Contract(abi, address);
        // 3. web3.eth 계약의 새 인스턴스를 불러올 가변 계약 생성
        this.setState({ contract });
        // 4. setState로 계약 값 state로 설정 (해당 계약은 가변 계약을 의미)
    
        // 블록체인으로 설정된 Krypto Birdz 의 값을 호출하고 민팅해야함
        // -> 민팅을 하기 위해선 해당 값 (= 강의에선 총공급 정보라고 지칭함)을 가져와서
        // 루핑 (loopihng)을 통해 프론트엔드에 배열을 출력해야 함
        // 따라서 위에서 설정한 계약 (contract)을 호출하기 위해
        // 계약 자체에 대한 인스턴스를 생성하고 abi와 address 정보를 불러와서 상태를 지정해줘야함
        const totalSupply = await contract.methods.totalSupply().call();
        // 총 공급 정보를 저장할 totalSupply 상수 생성
        this.setState({ totalSupply }); // 해당 totalSupply 상수를 state로 설정
    
        // 토큰을 추적하기 위한 배열 필요
        // 아래 반복문을 통해 recordz 값을 불러오는 것임
        // 사용자가 민트한 수만큼 totalSupply에 추가되서 그 값이 출력되게 함
        for (let i = 1; i <= totalSupply; i++) {
            const record = await contract.methods.recordz(i - 1).call();
            this.setState({
            recordz: [...this.state.recordz, record],
            }); // kryptoBrid 값도 setState() 함수 사용해서 state에 추가함
        }
        } else {
        // 네트워크 데이터가 확인 되지 않을때의 오류 메시지를 나타내기 위해
        // alert() 함수 사용해서 오류 메시지 출력
        window.alert("Smart contract not deployed");
        }
    }
    
    // 민팅(minting) == (블록체인이 되는) 정보를 발신하는 과정
    const mint = (record) => {
        this.state.contract.methods
        // 위에서 작성한 계약(contract)과 메서드(method) 불러오기
        .mint(record) // record값을 민트함
        .send({ from: this.state.account }) // 민팅할 발신지 주소 설정
        .once("receipt", (receipt) => {
            this.setState({
            recordz: [...this.state.recordz, record],
            // 이 값으로 토큰을 민팅하는 것임!
            }); // 위의 이벤트가 한번만 실행되고 바로 로그아웃되도록 설정 (.once 사용)
        });
    };
    
    function constructor(props) {
        // constructor 함수 사용 (렌더링 보다 먼저 실행됨)
        super(props);
        this.state = {
        account: "",
        contract: null,
        totalSupply: 0,
        recordz: [],
        };
        // state에 위와 같은 계정 정보 저장
    }

    //리덕스에 저장된 녹음 url 가져오기
    const record = a.record.record_url;
    
    return (
        <>
        <small className="text-white">나의 계정{this.state.account}</small>
        {console.log(this.state.record)}
        {console.log(this.state.account)}

        {/* 이더리움확인 후 블록체인을 불러올수 있는 계정 연동 */}
        {componentDidMount}

        {/* 민팅함수 호출 == (블록체인이 되는) 정보를 발신하는 과정 */}
        {mint(record)}
        
        </>
    )
}

export default Blockchain
