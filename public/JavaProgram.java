import java.util.Scanner;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;

public class JavaProgram {
    public static void main(String[] args) {
        // System.out을 UTF-8 인코딩으로 설정
        System.setOut(new PrintStream(System.out, true, StandardCharsets.UTF_8));
        Scanner scanner = new Scanner(System.in, StandardCharsets.UTF_8);
        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
        
            if(input.equals("reviews")){
                System.out.println("[\n" + //
                "  {\n" + //
                "    \"id\": 1,\n" + //
                "    \"story\": 8,\n" + //
                "    \"direction\": 7,\n" + //
                "    \"acting\": 9,\n" + //
                "    \"music\": 6,\n" + //
                "    \"overall\": 8,\n" + //
                "    \"review_content\": \"The movie had an engaging plot and strong performances, but the music was not very memorable.\"\n" + //
                "  },\n" + //
                "  {\n" + //
                "    \"id\": 2,\n" + //
                "    \"story\": 9,\n" + //
                "    \"direction\": 8,\n" + //
                "    \"acting\": 10,\n" + //
                "    \"music\": 9,\n" + //
                "    \"overall\": 9,\n" + //
                "    \"review_content\": \"An excellent film with outstanding acting and a compelling storyline. The direction was top-notch, and the music complemented the scenes perfectly.\"\n" + //
                "  },\n" + //
                "  {\n" + //
                "    \"id\": 3,\n" + //
                "    \"story\": 5,\n" + //
                "    \"direction\": 6,\n" + //
                "    \"acting\": 7,\n" + //
                "    \"music\": 5,\n" + //
                "    \"overall\": 6,\n" + //
                "    \"review_content\": \"The plot was somewhat predictable, and the direction was just average. However, the acting was decent, and the music was passable.\"\n" + //
                "  },\n" + //
                "  {\n" + //
                "    \"id\": 4,\n" + //
                "    \"story\": 10,\n" + //
                "    \"direction\": 9,\n" + //
                "    \"acting\": 10,\n" + //
                "    \"music\": 8,\n" + //
                "    \"overall\": 9,\n" + //
                "    \"review_content\": \"A masterpiece with a riveting story and brilliant direction. The actors delivered powerful performances, and the music added to the overall impact of the film.\"\n" + //
                "  },\n" + //
                "  {\n" + //
                "    \"id\": 5,\n" + //
                "    \"story\": 7,\n" + //
                "    \"direction\": 7,\n" + //
                "    \"acting\": 8,\n" + //
                "    \"music\": 7,\n" + //
                "    \"overall\": 7,\n" + //
                "    \"review_content\": \"A solid film with a good storyline and competent direction. The acting was strong, and the music fit well with the overall mood of the movie.\"\n" + //
                "  }\n" + //
                "]");
            }else if(input.equals("movies")){
                System.out.println("[\n" +
                "  {\n" +
                "    \"id\": 1,\n" +
                "    \"name\": \"Inception\",\n" +
                "    \"genre\": \"Science Fiction\",\n" +
                "    \"release_date\": \"2010-07-16\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": 2,\n" +
                "    \"name\": \"The Godfather\",\n" +
                "    \"genre\": \"Crime, Drama\",\n" +
                "    \"release_date\": \"1972-03-24\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": 3,\n" +
                "    \"name\": \"Pulp Fiction\",\n" +
                "    \"genre\": \"Crime, Drama\",\n" +
                "    \"release_date\": \"1994-10-14\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": 4,\n" +
                "    \"name\": \"The Dark Knight\",\n" +
                "    \"genre\": \"Action, Crime, Drama\",\n" +
                "    \"release_date\": \"2008-07-18\"\n" +
                "  },\n" +
                "  {\n" +
                "    \"id\": 5,\n" +
                "    \"name\": \"Schindler's List\",\n" +
                "    \"genre\": \"Biography, Drama, History\",\n" +
                "    \"release_date\": \"1993-12-15\"\n" +
                "  }\n" +
                "]");
            }
           
        }
        scanner.close();
    }
}