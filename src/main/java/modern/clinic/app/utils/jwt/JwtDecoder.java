package modern.clinic.app.utils.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nimbusds.jwt.SignedJWT;

public class JwtDecoder {

    public static JwtDecodeDto parseJWT(String accessToken) throws Exception {
        try {
            var decodedJWT = SignedJWT.parse(accessToken);
            var header = decodedJWT.getHeader().toString();
            var payload = decodedJWT.getPayload().toString();

            ObjectMapper mapper = new ObjectMapper();
            PayloadDto payloadDto = mapper.readValue(payload, PayloadDto.class);
            return JwtDecodeDto.builder().header(header).payload(payloadDto).build();

        } catch (Exception e) {
            throw new Exception("Invalid token!");
        }
    }

}
