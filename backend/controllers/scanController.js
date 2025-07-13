const AWS = require('aws-sdk');

const scanAWS = async (req, res) => {
    try {
        const s3 = new AWS.S3();
        const buckets = await s3.listBuckets().promise();
        res.json({
            success: true,
            message: "Scanned AWS successfully",
            data: buckets.Buckets
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { scanAWS };
