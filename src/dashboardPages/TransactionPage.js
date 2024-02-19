import TransferImg from '../images/Group 1453.png';
import DepositImg2 from '../images/Group 1452-1.png';
import RefreshImg from '../images/Frame 125.png';
import PreviousArrowImg from '../images/arrow-up-s-line 3.png';
import NextArrowImg from '../images/arrow-up-s-line 4.png';

export default function TransactionPage() {
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

                        <div className="TransCont">
                            <div className="ReceipientNameSub">Darrell Steward</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText">Failure</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>

                        <div className="TransCont">
                            <div className="ReceipientNameSub">Kristin Watson</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText2">Success</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>


                        <div className="TransCont">
                            <div className="ReceipientNameSub">Ronald Richards</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText3">Pending</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>



                        <div className="TransCont">
                            <div className="ReceipientNameSub">Floyd Miles</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText3">Pending</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>


                        <div className="TransCont">
                            <div className="ReceipientNameSub">Annette Black</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText">Failure</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>


                        <div className="TransCont">
                            <div className="ReceipientNameSub">Arlene McCoy</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText2">Success</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>



                        <div className="TransCont">
                            <div className="ReceipientNameSub">Marvin McKinney</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText">Failure</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>



                        <div className="TransCont">
                            <div className="ReceipientNameSub">Theresa Webb</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText2">Success</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>



                        <div className="TransCont">
                            <div className="ReceipientNameSub">Devon Lane</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText2">Success</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>



                        <div className="TransCont">
                            <div className="ReceipientNameSub">Dianne Russell</div>
                            <div className="AmountSub">$396.84</div>
                            <div className="ReferenceIDSub">0123456789</div>
                            <div className="StatusSub"><div className="StatusSubText2">Success</div></div>
                            <div className="TransDateSub">8 Mar 2022 11:57pm</div>
                        </div>
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
                        <div id="Numbers">1</div>
                        <div id="Numbers2">2</div>
                        <div id="Numbers2">3</div>
                        <div id="NumberElipses">.....</div>
                        <div id="Numbers2">22</div>
                    </div>

                    <img id="NextArrowImg" src={NextArrowImg} alt="NextArrowImg" />
                </div>

            </div>

        </>
    )
}