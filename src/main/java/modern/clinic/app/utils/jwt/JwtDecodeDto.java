package modern.clinic.app.utils.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class JwtDecodeDto {
    private String header;
    private PayloadDto payload;
}
