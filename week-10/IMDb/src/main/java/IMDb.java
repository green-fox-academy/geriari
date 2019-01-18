import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class IMDb {

  public static void main(String[] args) {

    System.setProperty("webdriver.chrome.driver", "/Users/geri/TestAutomation/chromedriver");
    WebDriver driver = new ChromeDriver();
    driver.manage().window().maximize();
    driver.get("https://www.imdb.com");

    SignIn.signIn(driver);

    int numberOfResults = Search.search(driver, "Bron");

    Select1st.select(driver);
    //todo: implement selectXth

    AddToWatchList.addToWatchList(driver);

    numberOfResults = Search.search(driver, "Fargo");

    Select1st.select(driver);

    AddToWatchList.addToWatchList(driver);

    GoToWatchList.goToWatchList(driver);

    SortBy.sortBy(driver, "IMDb Rating");

    ToggleOrder.toggleOrder(driver);

    //Logout.logout(driver);

    //driver.quit();

  }
}
