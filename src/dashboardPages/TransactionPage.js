import TransferImg from '../images/Group 1453.png';
import DepositImg2 from '../images/Group 1452-1.png';
import RefreshImg from '../images/Frame 125.png';
import PreviousArrowImg from '../images/arrow-up-s-line 3.png';
import NextArrowImg from '../images/arrow-up-s-line 4.png';
import Transactions from '../components/Transactions';
import PageNumbering from '../components/PageNumbering';

export default function TransactionPage() {
    {/*These variables might make things easier when backend is involved*/ }
    // let ReceipientNameSub;
    // let AmountSub;
    // let ReferenceIDSub;
    // let StatusSubTextFailure;
    // let TransDateSub;

    return (
        <>


            <div id="TransactionSec">
                <div id="TransOrder">
                    <div id="TransSec1">
                        <div id="TransHeader">
                            <div id="ReceipientName">Receipient Name</div>
                            <div id="Amount">Amount</div>
                            <div id="ReferenceID">ReferenceID</div>
                            <div id="Status">Status</div>
                            <div id="TransDate">Date</div>
                        </div>

                        {/*This might be easier when backend is involved*/}
                        {/* <Transactions
                            ReceipientNameSub={ReceipientNameSub}
                            AmountSub={AmountSub}
                            ReferenceIDSub={ReferenceIDSub}
                            StatusSubTextFailure={StatusSubTextFailure}
                            TransDateSub={TransDateSub}
                        /> */}


                        <Transactions
                            ReceipientNameSub="Darrell Steward"
                            AmountSub="$396.84"
                            ReferenceIDSub="0123456789"
                            StatusSubText="failure"
                            TransDateSub="8 Mar 2022 11:57pm"
                        />

                        <Transactions
                            ReceipientNameSub="Kristin Watson"
                            AmountSub="$396.84"
                            ReferenceIDSub="0123456789"
                            StatusSubText="success"
                            TransDateSub="8 Mar 2022 11:57pm"
                        />


                        <Transactions
                            ReceipientNameSub="Floyd Miles"
                            AmountSub="$396.84"
                            ReferenceIDSub="0123456789"
                            StatusSubText="pending"
                            TransDateSub="8 Mar 2022 11:57pm"
                        />


                        <Transactions
                            ReceipientNameSub="Annette Black"
                            AmountSub="$396.84"
                            ReferenceIDSub="0123456789"
                            StatusSubText="failure"
                            TransDateSub="8 Mar 2022 11:57pm"
                        />

                        <Transactions
                            ReceipientNameSub="Arlene McCoy"
                            AmountSub="$396.84"
                            ReferenceIDSub="0123456789"
                            StatusSubText="success"
                            TransDateSub="8 Mar 2022 11:57pm"
                        />


                        <Transactions
                            ReceipientNameSub="Marvin McKinney"
                            AmountSub="$396.84"
                            ReferenceIDSub="0123456789"
                            StatusSubText="failure"
                            TransDateSub="8 Mar 2022 11:57pm"
                        />



                        <Transactions
                            ReceipientNameSub="Theresa Webb"
                            AmountSub="$396.84"
                            ReferenceIDSub="0123456789"
                            StatusSubText="success"
                            TransDateSub="8 Mar 2022 11:57pm"
                        />



                        <Transactions
                            ReceipientNameSub="Devon Lane"
                            AmountSub="$396.84"
                            ReferenceIDSub="0123456789"
                            StatusSubText="success"
                            TransDateSub="8 Mar 2022 11:57pm"
                        />



                        <Transactions
                            ReceipientNameSub="Dianne Russell"
                            AmountSub="$396.84"
                            ReferenceIDSub="0123456789"
                            StatusSubText="success"
                            TransDateSub="8 Mar 2022 11:57pm"
                        />



                    </div>

                    <div id="TransSec2">
                        <div id="Wallet-AvailableBalance">
                            <div id="WalletText">
                                Wallet
                            </div>
                            <div id="AvailableBalanceText">
                                Available Balance<span id="USD">(USD)</span>
                            </div>
                        </div>

                        <div id="BalanceSec">
                            <div id="BalanceSubSec">
                                <div id="TransBalanceText">
                                    50,000.<span id="TransBalanceText2">00</span>
                                </div>
                                <div id="Refresh">
                                    Refresh
                                    <img id="RefreshImg" src={RefreshImg} alt="RefreshImg" />
                                </div>
                            </div>
                            <div id="BalanceSubSec2">
                                <div id="DepositSec">
                                    <img id="DepositSecImg" src={DepositImg2} alt="DepositImg" />
                                    Deposit
                                </div>

                                <div id="BalanceTransferSec">
                                    <img id="TransferSecImg" src={TransferImg} alt="TransferImg" />
                                    Transfer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="TransSec3">
                    <img id="PreviousArrowImg" src={PreviousArrowImg} alt="PreviousArrowImg" />
                    <div id="NumberingSec">
                        <PageNumbering highlighted="true" value="1" />
                        <PageNumbering highlighted="false" value="2" />
                        <PageNumbering highlighted="false" value="3" />
                        <div id="NumberElipses">.....</div>
                        <PageNumbering highlighted="false" value="22" />
                    </div>

                    <img id="NextArrowImg" src={NextArrowImg} alt="NextArrowImg" />
                </div>

            </div>

        </>
    )
}