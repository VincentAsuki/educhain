// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateRegistry {

    struct Certificate {
        string studentName;
        string institution;
        string course;
        uint256 dateIssued;
    }

    mapping(bytes32 => Certificate) public certificates;

    function issueCertificate(
        bytes32 certId,
        string memory studentName,
        string memory institution,
        string memory course
    ) public {

        certificates[certId] = Certificate(
            studentName,
            institution,
            course,
            block.timestamp
        );
    }

    function verifyCertificate(bytes32 certId)
        public
        view
        returns (Certificate memory)
    {
        return certificates[certId];
    }
}
